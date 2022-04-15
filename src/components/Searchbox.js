import styles from './Searchbox.module.css';

const Searchbox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBackground}>
        <div className={styles['search-container']}>
          <img
            src={require('../images/glass.png')}
            alt='Magnifying glass'
            className={styles.glassImage}
          />
          <input
            className={styles['search-input']}
            type='text'
            placeholder='Enter Location'
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
