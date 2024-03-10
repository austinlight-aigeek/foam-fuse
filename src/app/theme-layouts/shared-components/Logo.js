import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      {/* <img className="logo-icon w-32 h-32" src="assets/images/logo/logo.png" alt="logo" /> */}

      <div
        className="badge flex items-center py-4 px-8 mx-8 rounded"
        style={{ backgroundColor: '#121212', color: '#61DAFB' }}
      >
        <img className="logo-icon w-28 h-28" src="assets/images/logo/logo.png" alt="logo" />
        <span className="react-text text-14   mx-4"><b className="text-16">F</b>oam</span>
      </div>
    </Root>
  );
}

export default Logo;
