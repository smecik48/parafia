import { PhotoProvider, PhotoView } from 'react-photo-view';
import imgJachula from './jachula.jpg';
import imgMastalerz from './mastalerz.jpg';
import 'react-photo-view/dist/react-photo-view.css';

export default function Photos() {
    const images = [imgMastalerz, imgJachula]

    return (
        <PhotoProvider>
            <div className="foo">
                {images.map((item, index) => (
                    <PhotoView key={index} src={item} >
                        <img style={{width:"80%", maxWidth:"900px", paddingBottom:"10px"}} src={item} alt="" />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    );
}
