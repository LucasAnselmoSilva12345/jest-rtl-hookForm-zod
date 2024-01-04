import { Form, FormSchemaProps } from '../components/Form';

export function Home() {
  const handleSubmitForm = (data: FormSchemaProps) => {
    console.log({ data });
  };

  return (
    <section className="container py-4">
      <Form handleSubmitForm={handleSubmitForm} />
    </section>
  );
}
