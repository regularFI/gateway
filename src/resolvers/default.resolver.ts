import {Args, Query, Resolver} from "@nestjs/graphql";

@Resolver()
export class DefaultResolver {
    @Query('welcome')
    welcome() {
        return {
            message: "Welcome",
            user: "ozagi"
        };
    }
    @Query('welcomeUser')
    async welcomeUser(@Args() user: string) {
        return {
            message: "Welcome",
            user: user ?? "ozagi"
        };
    }
}
