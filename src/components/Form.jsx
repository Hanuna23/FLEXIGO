import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    reset(); // Limpia el formulario después de enviarlo
  };

  return (
    <section className="py-12 px-4 bg-blue-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Reparaturanfrage stellen
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-blue-800 p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Max Mustermann"
            className="w-full p-2 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Standort </label>
          <input
            {...register('location')}
            type="text"
            placeholder="Berlin"
            className="w-full p-2 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Problem / Problem Description</label>
          <textarea
            {...register('problem')}
            placeholder="Beschreiben Sie das Problem... / Describe the issue..."
            className="w-full p-2 rounded text-black"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Anfrage senden
        </button>
      </form>
    </section>
  );
}

export default Form;


