import { GreetingProps } from './path/to/GreetingProps';

declare module 'tuanhuydev-test-package' {
    export { GreetingProps };
    export { default as Greeting } from './components/Greeting';
}