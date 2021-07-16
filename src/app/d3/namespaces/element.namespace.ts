export namespace Element {

    export namespace Link {
        
        export class Configuration {
            visible: boolean;
            type: Element.Link.Types;
        }

        export enum Types {
            PROTECTED = "PROTECTED",
            WORK = "WORK",
            ALARM = "ALARM"
        }
    }  
}