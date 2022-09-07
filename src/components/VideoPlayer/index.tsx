import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
  VideoSource: string;
  handleProgress: (val: any) => void;
  thumbnail: string;
}

const VideoPlayer: React.FC<Props> = ({
  VideoSource,
  handleProgress,
  thumbnail,
}) => {
  return (
    <div className="student__video__player position-relative b16 bg-white p-2">
      <ReactPlayer
        className="react-player b16 player"
        url={VideoSource}
        playing={true}
        light={thumbnail}
        controls
        onProgress={handleProgress}
      />
    </div>
  );
};

export default React.memo(VideoPlayer);
