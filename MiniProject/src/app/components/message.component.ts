import { Component, Input } from "@angular/core";

@Component({
    selector:"message-component",
    templateUrl:"./message.component.html"
})

class MessageComponent{
    @Input() variant="";
    @Input() message=""
}
export default MessageComponent;