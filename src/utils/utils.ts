export class SocialLink {
  constructor(public name: string, public icon: string, public url: string) {}
}

export class ExternalLink {
  constructor(
    public title: string,
    public content: string,
    public icon: string,
    public url: string
  ) {}
}
