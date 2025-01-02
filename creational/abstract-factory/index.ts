import { Factory } from "./factories/factory";
import { WiredFactory } from "./factories/WiredFactory";
import { WirelessFactory } from "./factories/WirelessFactory";

function create(factory: Factory):void {
  factory.createHeadSet().listen()
  factory.createKeyBoard().type()
}

create(new WiredFactory())
create(new WirelessFactory())
