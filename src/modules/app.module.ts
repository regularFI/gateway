import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusDriver,
  MercuriusGatewayDriverConfig,
} from '@nestjs/mercurius';
import {DefaultModule} from "./default.module";

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusDriver,
      typePaths: ['./**/*.graphql'],
      graphiql: true
    }),
    DefaultModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
