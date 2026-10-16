import {ImageResponse} from 'next/og';

export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background:
            'radial-gradient(circle at 20% 20%, #7c3aed33, transparent 50%), radial-gradient(circle at 80% 80%, #ec489933, transparent 50%), #0c0a14',
          color: 'white',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{fontSize: 28, color: '#a78bfa', marginBottom: 24}}>
          rafiatou.dev
        </div>
        <div style={{fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em'}}>
          Rafiatou Nchetkou
        </div>
        <div style={{fontSize: 40, color: '#a29bb5', marginTop: 24}}>
          Développeuse web fullstack
        </div>
      </div>
    ),
    {...size}
  );
}