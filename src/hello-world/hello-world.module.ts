import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
import { Args, Float, Int, Query } from '@nestjs/graphql';

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

  @Query(() => Float, {name: 'randomNumber'})
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {name: 'randomFromZeroTo', description: 'Returns a random number from 0 to the specified number, with 6 default.'})
  getRandomFromZeroTo(
    @Args ('to', {type: () => Int, nullable: true})to: number = 6
  ): number {
    return Math.floor(Math.random() * to);
  }
}
