import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "linkify",
})
export class LinkifyPipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  // Modify this method according to your custom logic
  private stylize(text: string): string {
    let hashtagRegex = /(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{3,30})(\b|\r)/g;
    let atRegex = /(^|\B)@(?![0-9_]+\b)([a-zA-Z0-9_]{3,30})(\b|\r)/g;
    let linkRegex =
      /https:?\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    let stylizedText: string = "";
    if (text && text.length > 0) {
      // Linkify outright links
      stylizedText = text.replace(linkRegex, (match) => {
        return `<a href="${match}" target="_blank">${match}</a>`;
      });
      // Linkify #tags (e.g. #webinar)
      stylizedText = stylizedText.replace(hashtagRegex, (match) => {
        let urlBit = match.replace("#", "");
        return `<a href="https://twitter.com/search?q=%23${urlBit}" target="_blank">${match}</a>`;
      });
      // Linkify @ tags (e.g. @hubcap_eu)
      stylizedText = stylizedText.replace(atRegex, (match) => {
        let urlBit = match.replace("@", "");
        return `<a href="https://twitter.com/${urlBit}" target="_blank">${match}</a>`;
      });

      return stylizedText;
    } else return text;
  }
}
