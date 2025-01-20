const SectionTitle = ({ heading, description }) => {
  return (
    <section className="text-center my-8 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </section>
  );
};

export default SectionTitle;
