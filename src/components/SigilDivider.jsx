import React from 'react'

const SigilDivider = ({ 
  svg, 
  alt = "sigil divider", 
  maxWidth = "400px", 
  minWidth = "180px",
  top = 0,
  left,
  right,
  position = "absolute",
  transform = "translateY(-50%)"
}) => {
  return (
    <div className="sigil-divider-container reveal" style={{ 
      position: 'relative',
      height: 0,
      width: '100%',
      zIndex: -1 // Push it behind the section content
    }}>
      <div className="section-container" style={{ position: 'relative', height: 0 }}>
        <div className="sigil-glow" style={{
          position,
          top,
          left,
          right,
          transform, // Defaults to centering over the section boundary vertically
          width: `clamp(${minWidth}, 60vw, 100%)`, // Responsive width that shrinks on mobile
          maxWidth, // Easily change this via the maxWidth prop
          aspectRatio: '616 / 980',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 20%, #cbd5e1 45%, #e2e8f0 65%, #ffffff 100%)',
            WebkitMaskImage: `url(${svg})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${svg})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center'
          }} aria-label={alt} />
        </div>
      </div>
    </div>
  )
}

export default SigilDivider
