/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '5%': { transform: 'translateY(20%)' },
          '10%': { transform: 'translateY(10%)' },
          '15%': { transform: 'translateY(0%)' },
          '85%': { transform: 'translateY(0%)' },
          '95%': { transform: 'translateY(00%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        },
        grow: {
          '0%': { width:'240px' }, 
          '0.5%': { width:'376px' },
          '100%': { width:'376px' },
        },
        growBig: {
          '0%': { width:'176px' }, 
          '0.5%': { width:'476px' },
          '100%': { width:'476px' },
        },
        glowDown:{
          '0%':{opacity:0,transform:'translateY(-112px)'},
          '1%':{opacity:.5,transform:'translateY(112px)'},
          '100%':{opacity:.5,transform:'translateY(112px)'}, 
        },
        glowUp:{
          '0%':{opacity:1,transform:'translateY(0px)'},
          '1%':{opacity:1,transform:'translateY(-112px)'},
          '100%':{opacity:1,transform:'translateY(-112px)'}, 
        },
        _turnright:{
          '0%':{transform: 'translateX(-50px)'},
          '100%':{transform: 'translateX(0px)'},
        },
        _turnleft:{
          '0%':{transform: 'translateX(50px)'},
          '100%':{transform: 'translateX(0px)'},
        },
      }
    },
    animation: {
      textRevealbottomtoTop: 'reveal 5s infinite',
      rotate: 'rotate 5s linear infinite',
      grow: 'grow 50s ease-in-out',
      growBig: 'growBig 50s ease-in-out',
      glowDown:'glowDown 50s 1',
      glowUp:'glowUp 50s 1',
      _right:'_turnright 1s 1',
      _left:'_turnleft 1s 1',
    },
    fontFamily: {
      bebasNeue: ['Bebas Neue'],
      titillium: ['Titillium Web'],
      handrawn: ['Delicious Handrawn'],
      anek: ['Anek Latin'],
      saira: ['Saira'],
      ubuntu: ['Ubuntu'],
    }
  },
  
  plugins: [],
}