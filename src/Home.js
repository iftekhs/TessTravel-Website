import React, { useEffect } from 'react';
import './Home.css';
import firstTravel from './firstTravel.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@material-ui/core';
import Card from './Card';
import HotelCard from './HotelCard';
function Home({ modee }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={
        !modee == true ? 'home' : 'home__dark'
      }>
      <div className="home_top">
        <img
          data-aos="zoom-in"
          src={firstTravel}
          alt=""
        />

        <div className="tour-info-one">
          <h1
            data-aos="flip-up"
            data-aos-delay="500">
            {' '}
            Awesome popular spots{' '}
          </h1>
          <p
            data-aos="flip-up"
            data-aos-delay="500">
            You will be taken to the worldt's most
            <br></br>
            popular spots with the most tourist
            <br></br>
            views. You will be taken to the
            <br></br>
            worldt's most popular spots with the
            <br></br>
            most tourist views.<br></br>
          </p>
          <Button
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="1000"
            className="readMore">
            {' '}
            Read More{' '}
          </Button>
        </div>
      </div>
      <div className="home_top">
        <div className="tour-info-one">
          <h1
            data-aos="flip-up"
            data-aos-delay="500">
            {' '}
            Stunning Adventures{' '}
          </h1>
          <p
            data-aos="flip-up"
            data-aos-delay="500">
            You will be taken to the worldt's most
            <br></br>
            popular spots with the most tourist
            <br></br>
            views. You will be taken to the
            <br></br>
            worldt's most popular spots with the
            <br></br>
            most tourist views.<br></br>
          </p>
          <Button
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="1000"
            className="readMore">
            {' '}
            Read More{' '}
          </Button>
        </div>

        <img
          data-aos="zoom-in"
          src="https://www.makemytrip.com/travel-guide/media/dg_image/phuket/Cable-Jungle-Adventure.jpg"
          alt=""
        />
      </div>
      <div className="home_top">
        <img
          data-aos="zoom-in"
          src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200"
          alt=""
        />
        <div className="tour-info-one">
          <h1
            data-aos="flip-up"
            data-aos-delay="500">
            {' '}
            Night street trip{' '}
          </h1>
          <p
            data-aos="flip-up"
            data-aos-delay="500">
            You will be taken to the worldt's most
            <br></br>
            popular spots with the most tourist
            <br></br>
            views. You will be taken to the
            <br></br>
            worldt's most popular spots with the
            <br></br>
            most tourist views.<br></br>
          </p>
          <Button
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="1000"
            className="readMore">
            {' '}
            Read More{' '}
          </Button>
        </div>
      </div>

      <div className="home_middle">
        <img
          src="https://image.freepik.com/free-vector/travel-around-world-banner_24797-1115.jpg"
          alt=""
        />
      </div>
      <h1 data-aos="zoom-in" className="reviews">
        Our Customer's are having good time in our
        Tours
      </h1>

      <div className="home_bottom">
        <Card
          avatarImage="https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg"
          image="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200"
          star={4.9}
          review="  Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem
        Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an
        unknown printer took a galley of type"
          name="Tyler Smith"
        />
        <Card
          avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR48UKtRuov08-0aS1eEZ7UgsgrjTrBdp9KA&usqp=CAU"
          image="https://img.fishtailtravel.com/ContentImages/europe-tour-package-0-1600x1193.jpeg"
          star={4.6}
          review="  Lorem Ipsum is simply dummy text of the
  printing and typesetting industry. Lorem
  Ipsum has been the industry's standard
  dummy text ever since the 1500s, when an
  unknown printer took a galley of type"
          name="Kevin den"
        />
        <Card
          avatarImage="https://jbrandhorst.com/img/icon.jpg"
          image="https://i0.wp.com/cyclingeurope.org/wp-content/uploads/2016/06/bike-ride1.jpg?resize=500%2C333&ssl=1"
          star={4.7}
          review="  Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem
        Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an
        unknown printer took a galley of type"
          name="John cave"
        />
        <Card
          avatarImage="https://managewp.com/wp-content/uploads/2016/07/Kenny-Lange-PHNX21Design-Client-Report.jpg"
          image="https://mymoretrip.com/wp-content/uploads/2019/06/istock-mountainn-climbingg-sportss-id484778696.jpg"
          star={4.8}
          review="  Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem
        Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an
        unknown printer took a galley of type"
          name="Sam jone"
        />
      </div>

      <div className="home_bottom">
        <Card
          avatarImage="https://d2oiouuwxr3iri.cloudfront.net/sites/4/2017/08/11104244/01a4d6e.jpg"
          image="https://thefinancialexpress.com.bd/uploads/1603541511.jpg"
          star={4.6}
          review="  Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem
      Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an
      unknown printer took a galley of type"
          name="Rico rian"
        />
        <Card
          avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5HRGqbUpoWRlXl4z2kaTjMyfqg09iQTihQ&usqp=CAU"
          image="https://static1.squarespace.com/static/553833d1e4b045c2379337ef/553837dce4b099d2112a0e52/5dc0c560bf90ef65565b4af9/1572914971183/location_img-59-1969619245-148.jpg?format=1500w"
          star={4.6}
          review="  Lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem
    Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an
    unknown printer took a galley of type"
          name="Robin sian"
        />
        <Card
          avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4lJ8mk35EeOSDP1Ww3d81afc163khQApxQ&usqp=CAU"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVKYN614TA7KjMuNtIVtzh20lWav4tFANXQ&usqp=CAU"
          star={4.6}
          review="  Lorem Ipsum is simply dummy text of the
  printing and typesetting industry. Lorem
  Ipsum has been the industry's standard
  dummy text ever since the 1500s, when an
  unknown printer took a galley of type"
          name="Geff ber"
        />
        <Card
          avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8Um0PLGFZvalbIjNX5ikjHKXCSRVU_3H2A&usqp=CAU"
          image="data:image/jpeg;base64,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"
          star={4.6}
          review="  Lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem
    Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an
    unknown printer took a galley of type"
          name="Brian lean"
        />
      </div>
      <h1 className="top_hotels"> Top Hotels </h1>

      <div className="home_bottom">
        <HotelCard
          star={4.9}
          title="Hotel sammora in bali"
          image="https://skift.com/wp-content/uploads/2019/12/airbnb-plus-room-cape-town-1024x684.jpg"
          description="ustry. Lorem
          Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an
          unknown printer took a galley of t"
          date="Booking close in: March | 2 | 2021"
        />

        <HotelCard
          star={4.8}
          title="Hotel sammora in bali"
          image="https://i.ytimg.com/vi/09pDca1mITM/maxresdefault.jpg"
          description="ustry. Lorem
          Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an
          unknown printer took a galley of t"
          date="Booking close in: March | 2 | 2021"
        />

        <HotelCard
          star={4.9}
          title="Hotel sammora in bali"
          image="https://i.pinimg.com/originals/82/cc/07/82cc07da289f023e14b314a3ee352ee7.jpg"
          description="ustry. Lorem
          Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an
          unknown printer took a galley of t"
          date="Booking close in: March | 2 | 2021"
        />
      </div>
    </div>
  );
}

export default Home;
