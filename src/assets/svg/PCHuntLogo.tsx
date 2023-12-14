import { MotionStyle, Variants, motion } from 'framer-motion'
import React, { SVGProps } from 'react'

interface HuntLogoProps extends SVGProps<SVGSVGElement> {
  variants?: Variants
  motionStyle?: MotionStyle
}

export const PCHuntLogo: React.FC<HuntLogoProps> = ({ variants, motionStyle, ...props }: HuntLogoProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 893.678 176.04">
    <motion.g custom={0} transform="translate(-0.005 0.05)" style={motionStyle}>
      <motion.path
        custom={0}
        variants={variants}
        d="M799.7,169h0c-7.77,0-13.81-32.49-16.64-39.65,0-.66,0-1.31-.7-1.31H749.84c0,.65,0,1.31-.7,1.31C747,136.46,739,169,731.2,169h0a6.54,6.54,0,1,0,0,13h68.54a6.54,6.54,0,1,0,0-13Z"
        transform="translate(1.26 -6.05)"
      />
      <motion.path
        custom={0}
        variants={variants}
        d="M871.26,6.06H660.6c-11.48-.2-21,8.24-21.16,18.85V89.83c-.21,10.6,8.93,19.35,20.41,19.55H871.26c11.48.19,21-8.25,21.16-18.86V25.6C892.63,15,883.48,6.24,872,6.06Z"
        transform="translate(1.26 -6.05)"
      />
      <motion.path
        custom={0}
        variants={variants}
        d="M121,6.05h51.7a6.52,6.52,0,0,1,4.77,2,6.52,6.52,0,0,1,2,4.77V175a6.86,6.86,0,0,1-6.78,6.77H121a6.85,6.85,0,0,1-6.77-6.77V121.5H64V175a6.86,6.86,0,0,1-6.77,6.77H5.52a6.68,6.68,0,0,1-4.77-1.88,6.39,6.39,0,0,1-2-4.89V12.83a6.52,6.52,0,0,1,2-4.77,6.49,6.49,0,0,1,4.77-2h51.7a6.5,6.5,0,0,1,4.76,2,6.52,6.52,0,0,1,2,4.77V64.28h50.2V12.83a6.51,6.51,0,0,1,2-4.77A6.52,6.52,0,0,1,121,6.05Z"
        transform="translate(1.26 -6.05)"
      />
      <motion.path
        custom={0}
        variants={variants}
        d="M369.3,163.89Q344.57,182,302.41,182t-66.88-18.09q-24.72-18.07-24.72-56.49V12.74a6.38,6.38,0,0,1,2-4.7,6.54,6.54,0,0,1,4.76-2H270a6.58,6.58,0,0,1,4.77,2,6.35,6.35,0,0,1,2,4.68v98.12q0,10.11,6.91,15.54t18.69,5.42q11.79,0,18.7-5.42t6.9-15.54V12.71A6.32,6.32,0,0,1,330,8a6.55,6.55,0,0,1,4.77-2h52.45A6.58,6.58,0,0,1,392,8a6.38,6.38,0,0,1,2,4.7v94.7Q394,145.8,369.3,163.89Z"
        transform="translate(1.26 -6.05)"
      />
      <motion.path
        custom={0}
        variants={variants}
        d="M547.61,6.05h46.68a6.52,6.52,0,0,1,4.77,2,6.56,6.56,0,0,1,2,4.77V175a6.86,6.86,0,0,1-6.78,6.77h-40.4a12.17,12.17,0,0,1-10-5.27l-54.71-69.77V175a6.85,6.85,0,0,1-6.77,6.77H435.68A6.86,6.86,0,0,1,428.9,175V12.83a6.52,6.52,0,0,1,2-4.77,6.49,6.49,0,0,1,4.77-2h40.65a11.71,11.71,0,0,1,9.79,5L540.82,86.6V12.83a6.52,6.52,0,0,1,2-4.77A6.52,6.52,0,0,1,547.61,6.05Z"
        transform="translate(1.26 -6.05)"
      />
    </motion.g>
  </svg>
)
