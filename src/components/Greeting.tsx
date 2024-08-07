export interface GreetingProps {
    name: string;
}

const Greeting = ({ name }: GreetingProps) => {
    return <h1>{name ?? 'Hello World'}</h1>
}

export default Greeting;