import HeadingText from "components/heading-text"
import { features } from "config/content"

export default function Features() {
  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      {features.header || features.subheader ? (
        <HeadingText subtext={features.subheader} className="text-center">
          {features.header}
        </HeadingText>
      ) : null}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div
          className="md:border"
          style={{
            backgroundImage: `url(${features.image})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div className="grid grid-cols-1 gap-8">
          {features.content.map((cards, index) => (
            <div
              key={cards.text}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
            >
              {cards.image !== "" ? (
                <div className="flex">
                  <HeadingText className="text-center">
                    {`${index + 1}.`}
                </HeadingText>
                </div>
              ) : (
                <></>
              )}
              <div className="flex-1">
                <p className="md:text4xl text-2xl font-semibold">
                  {cards.text}
                </p>
                <p className="font-light text-muted-foreground md:text-lg">
                  {cards.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}