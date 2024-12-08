import preloader from '../../../assets/images/preloader.svg';

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default Preloader;
