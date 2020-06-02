import React from 'react';

function IgShows() {
  return (
    <section className='ig-upcoming-shows'>
      <div className='ig'>
        <h1>Instagram Feed</h1>
        <p className='text-dark'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores
          optio fuga beatae?
        </p>
        <div className='grid'>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
        </div>
      </div>
      <div className='upcoming-shows'>
        <h1>Upcoming Shows</h1>
        <div className='upcoming-shows-container'>
          <div className='upcoming-show'>
            <div className='us-date'>
              <div className='month'>JUN</div>
              <div className='day'>14</div>
            </div>
            <div className='us-venue'>
              <h3>LOS ARROYOS RESTAURANT</h3>
              Carmel, IN 46032
            </div>
            <div className='us-cta'>
              <a href='/' title='Call this venue to reserve my spot'>
                Reserve
              </a>
            </div>
          </div>
          <div className='upcoming-show'>
            <div className='us-date'>
              <div className='month'>JUN</div>
              <div className='day'>18</div>
            </div>
            <div className='us-venue'>
              <h3>RICK'S CAFE BOATYARD</h3>
              Carmel, IN 46032
            </div>
            <div className='us-cta'>
              <a href='/' title='Call this venue to reserve my spot'>
                Reserve
              </a>
            </div>
          </div>
          <div className='upcoming-show'>
            <div className='us-date'>
              <div className='month'>JUN</div>
              <div className='day'>20</div>
            </div>
            <div className='us-venue'>
              <h3>QUESOS RESTAURANT</h3>
              Carmel, IN 46032
            </div>
            <div className='us-cta'>
              <a href='/' title='Call this venue to reserve my spot'>
                Reserve
              </a>
            </div>
          </div>
          <div className='upcoming-show'>
            <div className='us-date'>
              <div className='month'>JUN</div>
              <div className='day'>24</div>
            </div>
            <div className='us-venue'>
              <h3>LOS ARROYOS RESTAURANT</h3>
              Carmel, IN 46032
            </div>
            <div className='us-cta'>
              <a href='/' title='Call this venue to reserve my spot'>
                Reserve
              </a>
            </div>
          </div>
          <div className='upcoming-show'>
            <div className='us-date'>
              <div className='month'>JUN</div>
              <div className='day'>29</div>
            </div>
            <div className='us-venue'>
              <h3>LOS ARROYOS RESTAURANT</h3>
              Carmel, IN 46032
            </div>
            <div className='us-cta'>
              <a href='/' title='Call this venue to reserve my spot'>
                Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IgShows;
