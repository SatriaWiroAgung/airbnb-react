export type Loadable<T> =
  | LoadableNotRequested
  | LoadableLoading<T>
  | LoadableLoaded<T>
  | LoadableError;

interface LoadableNotRequested {
  state: "not_requested";
}

interface LoadableLoading<T> {
  state: "loading";
  value?: T;
}

interface LoadableLoaded<T> {
  state: "loaded";
  value: T;
}

interface LoadableError {
  state: "error";
  error: unknown;
}

declare global {
  interface Promise<T> {
    bindLoadable(
      dispatch: React.Dispatch<React.SetStateAction<Loadable<T>>>
    ): void;
  }
}

// Promise.prototype.bindLoadable = function <T>(
//   dispatch: React.Dispatch<React.SetStateAction<Loadable<T>>>
// ) {
//   dispatch({ state: "loading" });
//   this.then((value: T) => {
//     dispatch({ state: "loaded", value: value });
//   }).catch((error: unknown) => {
//     dispatch({ state: "error", error: error });
//   });
// };

// export const mapLoadable = <T, V>(
//   loadable: Loadable<T>,
//   mapper: (value: T) => V
// ): Loadable<V> => {
//   switch (loadable.state) {
//     case "loaded":
//       return { state: "loaded", value: mapper(loadable.value) };
//     default:
//       return loadable;
//   }
// };
