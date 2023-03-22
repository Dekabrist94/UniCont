import style from './Ucont.module.css';
import media from './Media.module.css';
import { Text } from './text';
export const UCont = () => {
  return (
    <div className={`${style.container} ${media.container}`}>
      <div className={style.header}>
        <i>
          <h1>Header</h1>
          <img
            className={media.img}
            width={250}
            src="https://www.pngarts.com/files/3/Cowboy-Hat-PNG-Image-Background.png"
          />
          <Text />
        </i>
        <i>
          <Text />
        </i>
        <i>
          <Text />
        </i>
      </div>
      <div className={style.content}>
        <i>
          <h1>Content</h1>
          <img
            className={media.img}
            width={250}
            src="https://cutewallpaper.org/24/content-png/index-c239c-of-bd9b3-images.png"
          />
          <Text />
        </i>
        <i>
          <Text />
        </i>
        <i>
          <Text />
        </i>
      </div>
      <div className={style.footer}>
        <i>
          <h1>Footer</h1>
          <img
            className={media.img}
            width={250}
            src="https://t3.ftcdn.net/jpg/05/60/60/50/360_F_560605018_27m692fhRa9aDzY6Wigygnq1Ev22G3xb.jpg"
          />
          <Text />
        </i>
        <i>
          <Text />
        </i>
        <i>
          <Text />
        </i>
      </div>
    </div>
  );
};
