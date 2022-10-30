import Container from './components/features/Container/Container';

import LeftSide from './components/views/LeftSide/LeftSide';
import RightSide from './components/views/RightSide/RightSide';

const App = () => {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
}

export default App;
