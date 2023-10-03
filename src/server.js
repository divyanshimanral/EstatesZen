import { createServer, Model } from "miragejs";

createServer({
  models: {
    properties: Model,
  },

  seeds(server) {
    server.create("property", {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "RCE Theaters - 90 7 S Beckford Dr, Henderson, NC 27536",
      location: "8558 Pecan St.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
      location: "8558 Parker Rd.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 3,
      imgSrc:
        "https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Regal North Hills - 4150 Main at North Hills St, Releigh",
      location: "3890 Popular Dr.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "5,256",
      forRent: false,
      popular: true,
    });
    server.create("property", {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/1870774/pexels-photo-1870774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
      location: "8558 Green Rd.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/1769615/pexels-photo-1769615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "RCE Theaters - 907 Beckford Dr, Henderson, NC 27330",
      location: "8558 Green Rd.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: false,
      popular: true,
    });
    server.create("property", {
      id: 6,
      imgSrc:
        "https://images.pexels.com/photos/8438449/pexels-photo-8438449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
      location: "8558 Green Rd.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 7,
      imgSrc:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sample Location 2",
      location: "1234 Elm Street",
      roomNum: 2,
      bed: 3,
      bath: 2,
      area: 800,
      price: "5,500",
      forRent: false,
      popular: true,
    });
    server.create("property", {
      id: 8,
      imgSrc:
        "https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Apartment - 789 Oak Avenue, Los Angeles, CA",
      location: "789 Oak Avenue",
      roomNum: 1,
      bed: 1,
      bath: 1,
      area: 500,
      price: "3,000",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 9,
      imgSrc:
        "https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Luxury Villa - 123 Luxury Lane, Beverly Hills, CA",
      location: "123 Luxury Lane",
      roomNum: 5,
      bed: 6,
      bath: 4,
      area: 3500,
      price: "15,000",
      forRent: false,
      popular: false,
    });
    server.create("property", {
      id: 10,
      imgSrc:
        "https://images.pexels.com/photos/1587947/pexels-photo-1587947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Beachfront Condo - 456 Ocean View Drive, Miami, FL",
      location: "456 Ocean View Drive",
      roomNum: 2,
      bed: 2,
      bath: 2,
      area: 1200,
      price: "8,500",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 11,
      imgSrc:
        "https://images.pexels.com/photos/681327/pexels-photo-681327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Spacious Townhouse - 123 Pine St, Chicago, IL 60601",
      location: "123 Pine St.",
      roomNum: 4,
      bed: 3,
      bath: 2,
      area: 1600,
      price: "5,800",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 12,
      imgSrc:
        "https://images.pexels.com/photos/1240435/pexels-photo-1240435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Coastal Retreat - 567 Beach Blvd, Miami, FL 33101",
      location: "567 Beach Blvd.",
      roomNum: 3,
      bed: 2,
      bath: 2,
      area: 1000,
      price: "6,200",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 13,
      imgSrc:
        "https://images.pexels.com/photos/2297181/pexels-photo-2297181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Downtown Loft - 789 Oak St, Seattle, WA 98101",
      location: "789 Oak St.",
      roomNum: 1,
      bed: 1,
      bath: 1,
      area: 600,
      price: "3,200",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 14,
      imgSrc:
        "https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Mountain Retreat - 123 Summit Dr, Denver, CO 80201",
      location: "123 Summit Dr.",
      roomNum: 3,
      bed: 2,
      bath: 2,
      area: 1400,
      price: "4,800",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 15,
      imgSrc:
        "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sunny Apartment - 456 Sunny Rd, San Diego, CA 92101",
      location: "456 Sunny Rd.",
      roomNum: 2,
      bed: 1,
      bath: 1,
      area: 900,
      price: "3,000",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 16,
      imgSrc:
        "https://images.pexels.com/photos/2805285/pexels-photo-2805285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
      location: "8558 Green Rd.",
      roomNum: 3,
      bed: 4,
      bath: 1,
      area: 745,
      price: "7,255",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 17,
      imgSrc:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Apartment - 123 Main St, San Francisco, CA 94101",
      location: "456 Elm St.",
      roomNum: 2,
      bed: 2,
      bath: 1,
      area: 550,
      price: "3,500",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 18,
      imgSrc:
        "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Luxury Penthouse - 789 High St, New York, NY 10001",
      location: "789 High St.",
      roomNum: 5,
      bed: 3,
      bath: 3,
      area: 2200,
      price: "12,000",
      forRent: true,
      popular: true,
    });
    server.create("property", {
      id: 19,
      imgSrc:
        "https://images.pexels.com/photos/3625711/pexels-photo-3625711.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Quaint Cottage - 456 Oak Ln, Austin, TX 78702",
      location: "456 Oak Ln.",
      roomNum: 2,
      bed: 1,
      bath: 1,
      area: 800,
      price: "2,800",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 20,
      imgSrc:
        "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Modern Condo - 789 Maple Ave, Los Angeles, CA 90001",
      location: "789 Maple Ave.",
      roomNum: 3,
      bed: 2,
      bath: 2,
      area: 1200,
      price: "4,500",
      forRent: true,
      popular: false,
    });
    server.create("property", {
      id: 21,
      imgSrc:
        "https://images.pexels.com/photos/1101140/pexels-photo-1101140.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House in Shades - 789 Maple Ave, Sweden 3214",
      location: "789 Maple Ave.",
      roomNum: 3,
      bed: 2,
      bath: 2,
      area: 1200,
      price: "4,500",
      forRent: true,
      popular: true,
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/properties", (schema, request) => {
      return schema.properties.all();
    });

    this.get("/properties/:id", (schema, request) => {
      const id = request.params.id;
      return schema.properties.find(id);
    });
  },
});
