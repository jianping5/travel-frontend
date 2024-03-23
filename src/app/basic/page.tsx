'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // 使用 dynamic 来延迟加载 React Player

const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false }); // 使用 dynamic 包装 React Player，禁用服务器端渲染

const VideoPlayer = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoReady = () => {
    setVideoLoaded(true);
    console.log('Video is ready to play!');
  };

  useEffect(() => {
    // 在客户端渲染后加载视频
    setVideoLoaded(true);
  }, []);

  return (
    <div>
      {videoLoaded ? (
        <DynamicReactPlayer
          url="https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4"
          controls
          width="900px"
          height="auto"
          onReady={handleVideoReady}
        />
      ) : (
        <div style={{ width: '900px', height: '500px', backgroundColor: 'black' }}>
          {/* 播放器框架 */}
          <h2>Video Player Frame</h2>
          <p>Loading video...</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
