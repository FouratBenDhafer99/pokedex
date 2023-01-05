export class NamedAPIResource{

  name: string;
  url: string;


  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

export class NamedAPIResourceList{

  count: number;

  next: string | null;

  previous: string | null;

  results: NamedAPIResource[]


  constructor(count: number, next: string | null, previous: string | null, results: NamedAPIResource[]) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
