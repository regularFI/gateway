import {Module} from "@nestjs/common";
import {DefaultResolver} from "../resolvers";

@Module({
    providers: [DefaultResolver]
})
export class DefaultModule {}
