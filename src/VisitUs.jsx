import React from 'react';

const VisitUs = () => (
  <section className="flex overflow-hidden flex-col items-start px-20 pt-8 pb-56 w-full bg-zinc-500 max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <div className="flex flex-col mb-0 max-w-full w-[787px] max-md:mb-2.5">
      <div className="flex gap-4 self-start text-7xl text-center max-md:text-4xl">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/71ac98af43c8f3fdbc5c2400a1838b34dc51d22658a54cd5b7deea44659bda58?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68" alt="" className="object-contain shrink-0 my-auto aspect-[0.83] w-[39px]" />
        <h2 className="flex-auto max-md:text-4xl">Visit us:</h2>
      </div>
      <address className="mt-4 text-5xl max-md:max-w-full max-md:text-4xl not-italic">
        7 Main Road, Dhandeeswaram Nagar, Velachery, Chennai-600042
      </address>
    </div>
  </section>
);

export default VisitUs;