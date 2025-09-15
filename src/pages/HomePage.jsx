import Card from "../components/card/Card";
import data from "../data/data.json";
import HeroSection from "../components/hero/HeroSection";
import CategoryCard from "../components/category/CategoryCard";
// import HeroSection from "../components/HeroSection";
import GalleryCard from "../components/gallery/GalleryCard";
import ContactForm from "../components/ContactForm";
import { groupByCategory } from "../library/utils";

const categorizedItems = groupByCategory(data);

const HomePage = () => {
  /* Card */
  const url =
    "https://assets.lummi.ai/assets/QmPAN2zQFreRjZ5DvkJiYH1XRvRGiQUidVjgHLV1X4m49v?auto=format&w=1500";
  const url1 =
    "https://assets.lummi.ai/assets/Qmbu73Q2DSQRMAec5oFDfZbJLLA4gyPpwZYYemR9cVBEkb?auto=format&w=1500";
  return (
    <>
      <div className="container mx-auto p-3">
        {/* <LanguageSwitcher /> */}
        <HeroSection />
        <div className="my-15 lg:my-30 flex flex-col gap-8 lg:gap-10">
          <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
            Categories
          </h2>
          {/* <div className="categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"> */}
          <div className="categories grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 justify-items-center">
            {Object.keys(categorizedItems).map((category) => {
              return (
                <CategoryCard
                  key={categorizedItems[category].id}
                  category={category}
                  description={categorizedItems[category].description}
                />
              );
            })}
          </div>
        </div>
        <div className="my-15 lg:my-30 flex flex-col gap-8 lg:gap-15">
          <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
            Our Special Dishes
          </h2>

          <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data
              .filter((item) => {
                return item.special === "yes";
              })
              .map((item) => {
                return <Card key={item.itemId} {...item} />;
              })}
          </div>
        </div>
        <div className="my-15 lg:my-30 flex flex-col gap-8 lg:gap-15">
          <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
            Gallery
          </h2>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center">
            <GalleryCard url={url} />
            <GalleryCard url={url1} />
            <GalleryCard url={url} />
            <GalleryCard
              url={
                "https://drive.google.com/uc?export=view&id=1TPAWFNZK5JRx3KbxpyrCDpIzpBMMmvSZ"
              }
            />
          </div>
        </div>
        <div className="my-15 lg:my-30 flex flex-col gap-5">
          <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
            We'd Love to Hear from You!
          </h2>
          <p className="max-w-[80ch] leading-7">
            Thank you for choosing{" "}
            <span className="primary-text">KhaiKhai Family Restaurant</span> for
            your dining experience! We're always looking to improve and make
            every meal special. Share your feedback, whether it's about our
            food, service, or cozy atmosphere, to help us serve you better.
          </p>
          <ContactForm />
        </div>
        {/* <h3 className="heading-3 text-[2rem] font-bold">Chicken</h3> */}
      </div>
    </>
  );
};

export default HomePage;
