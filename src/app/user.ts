export class User {
    constructor(
      public id: number = null,
      public Email: string = '',
      public Password: string = '',
      public Address: string = '',
      public Address2: string = '',
      public City: string = '',
      public State: string = '',
      public Zip: string = '',
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ) {}
  }
