import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BasicModal from "../components/BasicModal";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import sevanavank from "../assets/img/sevan lake.jpg";
import Card from "@mui/material/Card";
import TourList from "../components/TourList";
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";
import Dilijan from "../assets/img/Dilijan incoming.png";
import Gyumri from "../assets/img/Gyumri incoming.png";
import tsaghkadzor from "../assets/img/Tsaghkadzor.jpg";
import Yerevan from "../assets/img/Yerevan.jpg";
import Aghveran from "../assets/img/Aghveran incoming.png";
import Echmiardzin from "../assets/img/Echmiardzin.png";
import Jermuk from "../assets/img/Jermuk.png";
import LakeArpi from "../assets/img/Lake Arpi.png";
import Stepanavan from "../assets/img/Stepanavan.png";
import tatev from "../assets/img/Tatev Monastery.jpg";
import Vanadzor from "../assets/img/Vanadzor.png";

const Incoming = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="back">
          {" "}
          <ClockLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="hot_tours_wrapper">
          <MobileMenu />
          <Header />
          <TourList />
          <section
            className="tours"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h1 className="page__title">Incoming Tours</h1>
            <div className="tours__container">
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Gyumri}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gyumri
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gyumri (Armenian: Գյումրի) is an urban municipal community
                    and the second-largest city in Armenia, serving as the
                    administrative center of Shirak Province in the northwestern
                    part of the country. By the end of the 19th century, when
                    the city was known as Alexandropol, it was one of the
                    largest cities of Russian-ruled Eastern Armenia with a
                    population similar to that of Yerevan. It was renamed to
                    Leninakan[c] during the Soviet period. The city's population
                    grew above 200,000 prior to the 1988 Spitak earthquake, when
                    it was devastated. As of the 2011 census, the city had a
                    population of 121,976, down from 150,917 reported at the
                    2001 census.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Yerevan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Yerevan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yerevan ( Armenian: Երևան ) is the capital and largest city
                    of Armenia and one of the world's oldest continuously
                    inhabited cities. Situated along the Hrazdan River, Yerevan
                    is the administrative, cultural, and industrial center of
                    the country. It has been the capital since 1918, the
                    fourteenth in the history of Armenia and the seventh located
                    in or around the Ararat Plain. The city also serves as the
                    seat of the Araratian Pontifical Diocese; the largest
                    diocese of the Armenian Apostolic Church and one of the
                    oldest dioceses in the world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Dilijan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dilijan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dilijan (Armenian: Դիլիջան) is a spa town and urban
                    municipal community in the Tavush Province of Armenia. The
                    town is one of the most important resorts in Armenia,
                    situated within the Dilijan National Park. The forested town
                    is home to numerous Armenian artists, composers, and
                    filmmakers and features some traditional Armenian
                    architecture. The town is often referred to as the Armenian
                    Switzerland or Little Switzerland by the locals. Sharambeyan
                    Street in the city centre, has been preserved and maintained
                    as the heart of Dilijan's old town, complete with
                    craftsman's workshops, a gallery and
                    a museum. Hiking, mountain biking, and picnicking are
                    popular recreational activities. As of the 2011 census,
                    Dilijan has a population of 17,712. Dilijan is currently the
                    fastest-growing urban settlement in Armenia
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sevanavank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sevan Lake
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Sevan (Armenian: Սևանա լիճ, romanized: Sevana lich) is
                    the largest body of water in both Armenia and the Caucasus
                    region. It is one of the largest freshwater high-altitude
                    (alpine) lakes in Eurasia. The lake is situated in
                    Gegharkunik Province, at an altitude of 1,900.44 m (6,235
                    ft) above sea level. The total surface area of its basin is
                    about 5,000 km2 (1,900 sq mi), which makes up 1⁄6 of
                    Armenia's territory. The lake itself is 1,264 km2 (488 sq
                    mi), and the volume is 32.8 km3 (7.9 cu mi). It is fed by 28
                    rivers and streams. Only 10% of the incoming water is
                    drained by the Hrazdan River, while the remaining 90%
                    evaporates. The lake provides some 90% of the fish and 80%
                    of the crayfish catch of Armenia. Sevan has significant
                    economic, cultural, and recreational value. Its sole major
                    island (now a peninsula) is home to a medieval monastery.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tsaghkadzor}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tsaghkadzor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tsaghkadzor (Armenian: Ծաղկաձոր) is a spa town and urban
                    municipal community, as well as one of the most popular
                    health resorts in Armenia, located north of the capital
                    Yerevan in the Kotayk Province. According to the 2011
                    census, the town has a population of 1,256, down from 3,350
                    reported in the 1989 census. Currently, the town has an
                    approximate population of 900 as per the 2016 official
                    estimate.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Aghveran}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aghveran
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aghveran (Armenian: Աղվերան) is a mountain resort in
                    the Kotayk Province of Armenia, within the municipality
                    of Arzakan village, located to the north
                    of Buzhakan village. It is situated on the Hrazdan River's
                    right-side tributary of Dalar (Armenian: Դալար).
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Echmiardzin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Echmiardzin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vagharshapat (Armenian: Վաղարշապատ) is the 4th-largest city
                    in Armenia and the most populous municipal community
                    of Armavir Province, located about 18 km (11 mi) west of the
                    capital Yerevan, and 10 km (6 mi) north of the closed
                    Turkish-Armenian border. It is commonly known
                    as Ejmiatsin (also
                    spelled Echmiadzin or Etchmiadzin, Էջմիածին), which was its
                    official name between 1945 and 1995. It is still commonly
                    used colloquially and in official bureaucracy. The city is
                    best known as the location of Etchmiadzin
                    Cathedral and Mother See of Holy Etchmiadzin, the center of
                    the Armenian Apostolic Church. It is thus unofficially known
                    in Western sources as a "holy city" and in Armenia as the
                    country's "spiritual capital" (հոգևոր մայրաքաղաք). It was
                    one of the major cities and a capital of ancient Greater
                    Armenia. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Jermuk}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jermuk
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Jermuk (Armenian: Ջերմուկ), is a mountain spa town and the
                    center of the Jermuk Municipality of the Vayots Dzor
                    Province in southern Armenia, at a road distance of 53 km
                    (33 mi) east of the provincial capital Yeghegnadzor. It was
                    considered one of the popular destinations for medical
                    tourism in the Soviet Union. Jermuk is known for its hot
                    springs and mineral water brands bottled in the town. It is
                    attractive for its fresh air, waterfall, artificial lakes,
                    walking trails, the surrounding forests and mineral water
                    pools. The town is being redeveloped to become a modern
                    center of tourism and health services. It is also being set
                    up to become a major chess centre, with numerous chess
                    international tournaments scheduled in the town. As per the
                    2016 official estimate, Jermuk had a population of around
                    3,400. However, as of the 2011 census, the population of
                    Jermuk was 5,572. The nearby villages of Herher (pop.
                    706), Karmrashen (pop. 252), and Gndevaz (pop. 829) are also
                    part of the municipality (community) of Jermuk.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={LakeArpi}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lake Arpi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Arpi (Armenian: Արփի լիճ) is located in the Shirak
                    Province of Armenia, on the Ashotsk plateau in the
                    northwestern part of the country. The lake sits at an
                    altitude of 2,025 m with an area of 20 km2. It originates
                    from a volcano tectonic earthquake. In 1951, the Arpi dam
                    was built to create the Lake Arpi reservoir and artificially
                    increased the natural state of 4.5 km2, 1.6 m deep, and
                    volume of 5 million cubic meters. The reservoir's dam is
                    10 m high and 80 m long. The reservoir-lake spans 7.3 km
                    long and 4.3 km wide, with an area of 20 km2, 8 m deep, and
                    a volume of 30 million cubic meters. Lake Arpi has become
                    the second most important body of water in Armenia, next
                    to Lake Sevan. It is used for irrigation and hydropower
                    production. The lake is fed by meltwater and four streams,
                    and it is the source of the Akhurian River.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Stepanavan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stepanavan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stepanavan (Armenian: Ստեփանավան), is a town and municipal
                    community in the Lori Province of Armenia. It is located
                    139 km north of the capital Yerevan and 24 km north of the
                    provincial centre Vanadzor, halfway between Yerevan and
                    Tbilisi. As of the 2011 census, the population of the town
                    is 13,086. Currently, the town has an approximate population
                    of 10,800 as per the 2016 official estimate. Due to its
                    location on the shores of Dzoraget River among the forest of
                    Lori plateau and Bazum mountains, Stepanavan is considered a
                    resort town in northern Armenia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Vanadzor}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vanadzor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vanadzor (Armenian: Վանաձոր) is an urban municipal community
                    and the third-largest city in Armenia, serving as the
                    capital of Lori Province in the northern part of the
                    country. It is located about 128 kilometres (80 miles) north
                    of the capital Yerevan. As of the 2011 census, the city had
                    a population of 86,199, down from 148,876 reported at the
                    1979 official census. Currently, the town has an approximate
                    population of 82,200 as per the 2016 official estimate.
                    Vanadzor is the seat of the Diocese of Gougark of
                    the Armenian Apostolic Church.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>




              <Card
            sx={{
              maxWidth: 345,
              margin: "5px 5px",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={tatev}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tatev Monastery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Tatev Monastery (Armenian: Տաթևի վանք, romanized: Tat'evi
                vank') is a 9th-century Armenian Apostolic monastery located on
                a large basalt plateau near the village of Tatev in the Syunik
                Province in southeastern Armenia. The term "Tatev" usually
                refers to the monastery. The monastic ensemble stands on the
                edge of a deep gorge of the Vorotan River. Tatev is known as the
                bishopric seat of Syunik and played a significant role in the
                history of the region as a center of economic, political,
                spiritual and cultural activity. The Monastery of Tatev has been
                described as one of the two best-known monasteries in Armenia,
                along with Noravank in the province of Vayots Dzor. In the 14th
                and 15th centuries, the monastery hosted one of the most
                important Armenian medieval universities, the University of
                Tatev, which contributed to the advancement of science, religion
                and philosophy, reproduction of books and development of
                miniature painting. Scholars of the Tatev University contributed
                to the preservation of Armenian culture and creed during one of
                its most turbulent periods in its history.
              </Typography>
            </CardContent>
            <CardActions>
              <BasicModal />
              <a href="tel:+37494421443">
                <i className="fas fa-phone-square-alt callicon"></i>
              </a>
            </CardActions>
          </Card>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Incoming;
