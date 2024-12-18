import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Entry from './Components/Entry.jsx';

export default function App() {
  return (
    <>
    <Header />
      <Entry
      country = "Japan"
      placeName = "Mount Fuji"
      img = {{
        src: "./media/mount_fuji.webp",
        alt: "mount fuji"
      }}
      date = "12 Jan, 2021 - 24 Jan, 2021"
      locationLink = "https://maps.app.goo.gl/6DK8BpbrA7uGepzi9"
      description = "Mount Fuji is the tallest mountain in Japan, 
                    standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, 
                    for both Japanese and foreign tourists."
      
      />
      </>
  );
}

