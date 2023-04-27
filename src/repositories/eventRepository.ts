import AirBnbEvent from "../models/AirBnbEvent";

export interface EventRepository {
  getAllEvent(): Promise<AirBnbEvent[]>;
}

class RealEventRepository implements EventRepository {
  async getAllEvent(): Promise<AirBnbEvent[]> {
    const events: AirBnbEvent[] = [
      {
        id: "121",
        status: "Online",
        image:
          "https://a0.muscache.com/im/pictures/cbfa814d-dd89-42c1-ab33-06470bff74d5.jpg?im_w=1200",
        rating: 4.5,
        numberOfRating: 5,
        country: "Taiwan",
        description:
          "Four Seasons Starry Sky - Angel Moonlight 2ppl Room/Garden View 1 King Bed",
        price: 80,
      },
      {
        id: "122",
        status: "Sold Out",
        image:
          "https://a0.muscache.com/im/pictures/4a11ba2e-a04c-4f7a-8983-9a4bd4d1ee50.jpg?im_w=1200",
        rating: 5.0,
        numberOfRating: 5,
        country: "USA",
        description:
          " New special price, convenient transportation, big bathtub, mountain and lake view room",
        price: 120,
      },
      {
        id: "123",
        status: "Online",
        image:
          "https://a0.muscache.com/im/pictures/bf0edfd0-ae14-441d-bd2a-9e44a017655f.jpg?im_w=1200",
        rating: 4.0,
        numberOfRating: 5,
        country: "USA",
        description: "Kabin B&B & Kamar Double Hualien Taroko YU",
        price: 210,
      },
      {
        id: "124",
        status: "Online",
        image:
          "https://a0.muscache.com/im/pictures/miso/Hosting-25462985/original/5a375451-e62f-45a3-9a55-39b838f06595.jpeg?im_w=1200",
        rating: 4.0,
        numberOfRating: 5,
        country: "Indonesia",
        description:
          "Penghu Magong Destination Inn - Ruang Keluarga untuk 6 orang",
        price: 75,
      },
      {
        id: "125",
        status: "Online",
        image:
          "https://a0.muscache.com/im/pictures/miso/Hosting-45164232/original/2f78dd86-7d0d-486c-99d2-083f1f2202ba.jpeg?im_w=1200",
        rating: 4.0,
        numberOfRating: 5,
        country: "Korea",
        description:
          "B&B Tranquillo Harian · Idyllic, Pemandangan Samudra, Tenang · 2 -1",
        price: 175,
      },
      {
        id: "126",
        status: "Online",
        image:
          "https://a0.muscache.com/im/pictures/1727c4e5-5ac5-4a23-b607-0fba30985832.jpg?im_w=1200",
        rating: 4.0,
        numberOfRating: 5,
        country: "Korea",
        description: "Yamanaka Immortal Minsu Inn",
        price: 354,
      },
    ];

    await new Promise((r) => setTimeout(r, 2000));

    return events;
  }
}

export const NewEventRepository: () => EventRepository = () =>
  new RealEventRepository();
