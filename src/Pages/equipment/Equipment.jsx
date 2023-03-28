import "./equipment.css";

export default function Equipment() {
  return (
    <div className="equipmentWrapperInfo">
      <h1>Modern Day Equipments and Technology</h1>
      <div className="equipmentWrapperInfoIntro">
        <p>
          Modern farmers have a huge range of equipment options for the various
          activities they do on an annual basis. From high-tech combine
          harvesters to simple tractors, the various kinds of farm equipment
          available can meet the needs of small-scale homesteaders and
          industrial-size farming operations alike. However, it can be difficult
          to keep track of all the options. New farmers especially may wonder
          what the different types of farming machinery are for. For small- and
          mid-size farms especially, determining the different types of farming
          machinery you may need to make your operations more efficient can be
          frustrating. While all the equipment available may seem confusing,
          knowing about the basic farm equipment options can be an enormous
          help. If you're looking into purchasing new or used farm equipment,
          take a look at this guide. We'll go over the different types of
          agricultural machines and their uses, as well as some of the options
          for small, mid-size and large-scale farming operations.
        </p>
      </div>
      <div className="equipmentWrapperInfoVehicles">
        <div className="equipmentWrapperInfoFarm">
          <h2>FARMING VEHICLES</h2>
          <img
            className="equipmentWrapperInfoImg"
            src={require("./Farming-Vehicles.jpg")}
            alt=""
          />
          <p>
            Of the different types of farm equipment and their uses, vehicles
            are the most important and represent the largest investment. While a
            truck is often a staple of farming life, there are several other
            farm-specific vehicles, too.
          </p>
        </div>
        <div className="equipmentWrapperInfoFarm">
          <h2>1. Tractors</h2>
          <p>
            To say that "tractor" is a broad category is an understatement. The
            tractor is ubiquitous in the farming world, and it comes in a range
            of sizes to fit any farming operation. The primary purpose of a
            tractor is to pull farm equipment, but modern tractors can be
            outfitted with a variety of attachments to suit just about any
            farming need. For this reason, tractors are common-sense purchases
            for small and large-scale farmers alike.
          </p>
          <img
            className="equipmentWrapperInfoImg"
            src={require("./Tractors.jpg")}
            alt="Tractor"
          />
          <p>There are several types of tractors, including the following:</p>
          <ul>
            <li>
              Compact tractors: Compact tractors, as their name implies, are
              small, high-powered tractors that can assist with all the basic
              functions needed on a farm. Compact tractors are ideal for
              material handling and working in tight spaces where traditional
              tractors can't fit.
            </li>
            <li>
              Wheeled tractors: Wheeled tractors are general-purpose tractors
              that help you get the most out of your machinery. These utility
              tractors can meet a variety of demands and can be outfitted for
              tilling, material handling and equipment pulling. With a range of
              options in horsepower, lifting capacity, control and cab style,
              you can choose the wheeled tractor that works best for you and
              your application.
            </li>
            <li>
              Track tractors: Track tractors are farming vehicles mounted with
              rubber tracks instead of tires, allowing them to plow fields with
              more power while providing a smoother ride for the operator.
            </li>
            <li>
              Orchard tractors: Orchard tractors are a special type of tractor
              adapted with features to work optimally in orchards. These slender
              tractors can more easily fit between lines of trees while still
              providing the power needed to do landscaping and maintenance.
            </li>
          </ul>
        </div>
        <div className="equipmentWrapperInfoFarm">
          <h2>2.Combine or Harvestors</h2>
          <img
            className="equipmentWrapperInfoImg"
            src={require("./4-Combine-or-Harvester-Resized.jpg")}
            alt="Combine or harvestor"
          />
          <p>
            Grain farmers require combines, also known as harvesters or combine
            harvesters, that help to harvest their crops efficiently. Even
            small-scale grain farmers can benefit greatly by using a combine.
            These massive pieces of machinery use a complex system of gears,
            blades, belts and wheels to turn cereal crops into grain. Combines
            accomplish this through three primary processes:
          </p>
          <ol type="1">
            <li>
              Reaping: Reaping is the process of cutting the plant, which is
              accomplished by the header, reel and cutter bar on the combine.
              The header gathers the crops while the reel pushes them toward the
              cutter bar, which cuts the crops at their base.
            </li>
            <li>
              Threshing: Threshing is the process of separating the edible parts
              of the crop from the non-edible parts. This is accomplished by the
              threshing drum, which beats the cut crops to separate the grains
              from their stalks.
            </li>
            <li>
              Winnowing: Winnowing is the process of separating light chaff from
              the grain, and it is usually accomplished while the grain is in
              the threshing drum. Chaff is usually separated from the grain
              through the use of sieves.
            </li>
          </ol>
          <p>
            There is a huge array of combines and combine attachments to meet
            the needs of any farm. Many newer combines are even able to track
            yield data, showing which areas of the field did well and which
            areas did poorly so that these issues can be addressed the following
            year.
          </p>
        </div>
        <div className="equipmentWrapperInfoFarm">
          <h2>3.ATV OR UTV</h2>
          <img
            className="equipmentWrapperInfoImg"
            src={require("./5-All-Terain-Vehicles.jpg")}
            alt="ATV OR UTV image"
          />
          <p>
            All-terrain vehicles, also known as ATVs or four-wheelers, are
            becoming increasingly common on farms of all sizes, as are utility
            vehicles or UTVs. These smaller vehicles can move across rough
            terrain more effectively than most road vehicles and more quickly
            than a typical tractor. Additionally, several types of attachments
            will work for these vehicles, including small trailers, spreaders
            and mowers.
          </p>
        </div>

        <div className="equipmentWrapperInfoFarm">
          <h2>TRACTOR ATTACHMENTS</h2>
          Tractor attachments are attached to tractors or pulled behind them to
          add a new level of functionality. Their uses range widely from soil
          management to seeding. The different types of farm machinery
          attachments are detailed below
          <img
            className="equipmentWrapperInfoImg"
            src={require("./6-About-Tractor-Attachments.jpg")}
            alt="tractor attachments"
          />
        </div>
        <div className="equipmentWrapperInfoFarm">
          <h3>1. Plows</h3>
          <p>
            A plow is a large tractor attachment that drags behind the tractor,
            using long blades to cut furrows in the soil. This process not only
            loosens and turns the soil, but it also helps kill off any surface
            vegetation that is not intended to be there. While the soil has to go
            through several subsequent steps to be ready for planting, plowing is
            an essential first step. The concept of a plow may seem simple enough,
            but there are a variety of different plow types. Each plow type is
            suited to a specific soil type, soil condition and crop type. Here is
            a look at the three most common types of plows:
          </p>
          <ul>
            <li>
              Moldboard plows: Moldboard plows consist of wing-shaped blades,
              which are specifically designed to cut into and turn the soil. This
              is an ideal type of plow for shallow but thorough soil turning,
              which is often necessary for land that hasn't been used for crop
              production for several years.
            </li>
            <li>
              Disc plows: Disc plows consist of rows of discs that work to turn
              the soil and cut up weeds. These are less common than moldboard
              plows as they are less effective at turning the soil, but disc plows
              may be more useful for soil that is particularly sticky or rocky.
            </li>
            <li>
              Chisel plows: Chisel plows consist of exceptionally long shanks.
              These shanks turn the soil at a depth of a foot or more. This is
              often necessary for land that has been used for consistent crop
              production.
            </li>
          </ul>
          <p>
            Plows can range widely in price from a few hundred to several thousand
            dollars depending on the type, size, brand and condition of the plow.
          </p>

        </div>
        <div className="equipmentWrapperInfoFarm">
          <h3>2.HARROWS</h3>
          <p>
            Where plowing primes the soil, harrowing further agitates it in
            preparation for agricultural work. These attachments break down clumps
            of soil, make the soil surface level and redistribute crop and weed
            residue to make it easier for new plants to take root and grow.
            Harrows can also be used after distributing manure and fertilizer, as
            they can help break up clumps and distribute the fertilizer more
            evenly.
          </p>
          <img
            className="equipmentWrapperInfoImg"
            src={require("./7-Types-of-Harrows.jpg")}
            alt="Harrows"
          />
          <p>Some common types of harrows include:</p>
          <ul>
            <li>
              Spring harrows: Spring harrows are an older style that isn't
              commonly found today. These attachments use flexible iron teeth
              mounted in rows to loosen and agitate the soil.
            </li>
            <li>
              Roller harrows: Roller harrows look like large spiked tubes and, as
              the name suggests, are rolled across the soil to help crush the soil
              and prepare it for seed planting.
            </li>
            <li>
              Chain harrows: Chain harrows look like chain nets with spiked
              attachments. These are run over the surface of the ground to help
              aerate and spread soil and fertilizer.
            </li>
            <li>
              Disc harrows: Disc harrows are the more modern version of spring
              harrows, and consist of rows of large discs that break up soil and
              weeds more thoroughly after plowing.
            </li>
            <p>
              Often, multiple types of harrows are used for different purposes and
              may be used multiple times during the soil preparation process.
              Harrows can be pulled behind tractors or ATVs, depending on their
              size and complexity. More advanced harrows require a tractor, but
              they often combine the benefits of multiple types of harrows all
              into one.
            </p>
          </ul>

        </div>

        <div className="equipmentWrapperInfoFarm">
          <h3>3.FERTILIZER SPREADERS</h3>
          <p>
            Fertilizer spreaders function as the name suggests — they spread
            fertilizer across a field. While there are fertilizer spreaders that
            can be run separately, most farming operations require a tractor-run
            fertilizer spreader for quick, evenly distributed fertilization. There
            are multiple types of fertilizer spreaders, varying primarily based on
            the type of fertilizer used. These are some of the more common types
            of tractor-mounted fertilizer spreaders:
          </p>
          <ul>
            <li>
              Broadcast spreader: Possibly the most common fertilizer spreader is
              the broadcast spreader, which works by taking fertilizer and
              dispersing it using gravity.
            </li>
            <li>
              Manure spreader: Manure spreaders take solid manure from livestock
              and spread it across a field. This is an easy way of utilizing
              manure effectively, though the solid manure will often need to be
              run over with a harrow to break it up and mix it in with the soil.
            </li>
            <li>
              Slurry spreader: Liquid manure spreaders are also known as slurry
              spreaders, which spray a slurry of liquid manure across a field.
            </li>
          </ul>
          <p>
            Fertilizer spreaders vary widely in size and price, so consider your
            application closely before making a decision on which type to buy.
            It's also worthwhile to note that fertilizer spreader attachments are
            available for ATVs and UTVs as well as tractors.
          </p>
        </div>
        <div className="equipmentWrapperInfoFarm">

          <h3>4.SEEDERS</h3>
          <div className="equipmentWrapperInfoCom"></div>

          <img
            className="equipmentWrapperInfoImg"
            src={require("./8-Seeders-Definition.jpg")}
            alt="ATV OR UTV image"
          />
          <p>
            Seeders, as the name would suggest, are designed to spread seeds
            across large plots of land quickly and efficiently. While small farms
            may use small mechanical seeders or even hand-seeding methods,
            tractor-pulled seeders are most commonly used in large-scale farms
            today. There are different machines used in agriculture seeding,
            however, such as the following:
          </p>
          <ul>
            <li>
              Broadcast seeders: Broadcast seeders are also known as seeders or
              rotary spreaders, and they come in all sizes. These seeders work by
              placing seeds inside a hopper. Inside the hopper, a plate turns,
              taking seeds in for dispersing across the field. While this method
              is very effective to plant cover crops and grasses, it is not ideal
              for garden crops that need more organization, such as to be laid out
              in rows.
            </li>
            <li>
              Air seeders: Air seeders are very large seeders that use compressed
              air to shoot seeds into the ground. Though highly effective, air
              seeders can only be used on small, round seeds because of the way
              they operate, which limits their utility.
            </li>
            <li>
              Box drill seeders: Box drills are the preferred seeder for most
              farming operations due to the fact that they are easy to use and
              work with a wide variety of seed types. These attachments drill into
              the soil and drop seeds at a specific depth.
            </li>
            <li>
              Planters: Planters are the most accurate seeders, though they also
              tend to be the most expensive. Planters consist of several blades
              and wheels topped with seedboxes that contain the seeds to be
              planted. The planter works by cutting into the ground, dropping
              individual seeds, then closing the ground behind them, all in quick
              succession.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
