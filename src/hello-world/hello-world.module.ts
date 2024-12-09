import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
import { Query } from '@nestjs/graphql';

@Module({
  providers: [HelloWorldResolver]
})
export class HelloWorldModule {
  @Query(() => String, {
    description: 'Returns a simple hello world message.',
    name: 'hello'
  })
  helloWorld(): string {
    return 'Hello World!';
  }
}
