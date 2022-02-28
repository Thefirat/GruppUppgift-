import React from 'react'
import '../Style/footer.css'


function Footer() {
  return (
  <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">G-Seven Tech</h1>
  </div>  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">rubrik1</h2>

      <ul class="nav__ul">
        <li>
          <a>2</a>
        </li>

        <li>
          <a>3</a>
        </li>
            
        <li>
          <a>4</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Rubrik2</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a>1</a>
        </li>
        
        <li>
          <a>2</a>
        </li>
        
        <li>
          <a>3</a>
        </li>
        
        <li>
          <a>4</a>
        </li>
        
        <li>
          <a>5</a>
        </li>
        
        <li>
          <a>6</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Contact</h2>
      
      <ul class="nav__ul">
        <li>
          <a>    
           <address>
           Gustavslundsvägen 151 D, 167 51 Bromma
           </address>
          </a>
        </li>
        <li>
          <a>    
            <div class="legal">
            <p>&copy; 2022</p>
             </div>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</footer>
  )
}

export default Footer