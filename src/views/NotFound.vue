<template>

  <div>

    <!-- Cave mans -->
    <div class="container">

      <!-- Error -->
      <div class="text"><p>404</p></div>

      <div class="container">

        <!-- Caveman left -->
        <div class="caveman">
          <div class="leg">
            <div class="foot"><div class="fingers"></div></div>
          </div>
          <div class="leg">
            <div class="foot"><div class="fingers"></div></div>
          </div>
          <div class="shape">
            <div class="circle"/>
            <div class="circle"/>
          </div>
          <div class="head">
            <div class="eye"><div class="nose"></div></div>
            <div class="mouth"></div>
          </div>
          <div class="arm-right"><div class="club"></div></div>
        </div>

        <!-- Caveman right -->
        <div class="caveman">
          <div class="leg">
            <div class="foot"><div class="fingers"></div></div>
          </div>
          <div class="leg">
            <div class="foot"><div class="fingers"></div></div>
          </div>
          <div class="shape">
            <div class="circle"/>
            <div class="circle"/>
          </div>
          <div class="head">
            <div class="eye"><div class="nose"></div></div>
            <div class="mouth"></div>
          </div>
          <div class="arm-right"><div class="club"></div></div>
        </div>
      </div>

    </div>

    <!-- Description -->
    <div class="description">
      <p><strong style="font-size:calc(12px + 1.5vw);">Page not found!</strong> The page you are looking for doesn't exist or and other error occurred.</p>
    </div>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

$color-black:     #13242C;
$color-white:     #fff;
$color-red-1:     #D13433;
$color-red-2:     #932422;
$color-skin-1:    #EAB08C;
$color-skin-2:    #D9766C;
$color-skin-3:    #B2524D;
$color-hair:      #13242C;
$color-wood-1:    #601513;
$color-wood-2:    #410A09;

@mixin position {
  position: absolute;
}
@mixin top50 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
@mixin left50 {
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
@mixin centered {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.description {
  margin:31rem auto 2rem auto;
  text-align: center;
}

// ----- Scene
.text {
  @include centered;
  color: rgba($color-black, 0.1);
  font-size: 30vw;
  text-align: center;
  top: 40%;
}

.container {
  @include centered;
  height: 18.75rem;
  width: 31.25rem;
  &:after {
    @include position;
    content: "";
    background-color: rgba($color-black, 0.1);
    border-radius: 0.75rem;
    bottom: 2.5rem;
    height: 0.75rem;
    left: 5rem;
    width: 21.875rem;
    z-index: -1;
  }
}

// ---- Caveman
.caveman {
  height: 18.75rem;
  position: absolute;
  width: 15.625rem;
}
.caveman:nth-child(1) { right: 1.25rem; }
.caveman:nth-child(2) { left: 1.25rem; transform: rotateY(180deg); }
.head {
  @include position;
  background-color: $color-hair;
  border-radius: 3.125rem;
  height: 8.75rem;
  left: 3.75rem;
  top: 1.563rem;
  width: 4.063em;
  &:after, &:before {
    content: "";
    @include position;
    background-color: $color-black;
    border-radius: 0.625rem;
    height: 1.25rem;
    width: 0.438rem;
  }
  &:after   { left: 2.188rem; top: -0.5rem; transform:rotate(20deg); }
  &:before  { left: 1.875rem; top: -0.5rem; transform:rotate(-20deg); }
  .eye {
    @include left50;
    background-color: $color-skin-1;
    border-radius: 3.125rem;
    height: 1rem;
    left: 45%;
    top: 2.5rem;
    width: 3rem;
    &:after, &:before {
      content: "";
      @include top50;
      background-color: $color-black;
      border-radius: 50%;
      height: 0.313rem;
      width: 0.313rem;
    }
    &:after {
      left: 0.313rem;
    }
    &:before {
      right: 0.563rem;
    }
    .nose {
      @include centered;
      background-color: $color-skin-2;
      border-left: 0.5rem solid rgba($color-black, 0.1);
      border-radius: 0.625rem;
      box-sizing: border-box;
      height: 2.188rem;
      left: 45%;
      top: 0.75rem;
      width: 0.938rem;
    }
  }
}
.shape {
  @include left50;
  border-radius: 50%;
  height: 8.75rem;
  overflow: hidden;
  top: 4.375rem;
  width: 8.75rem;
  .circle {
    @include position;
    border-radius: 50%;
    height: 3.75rem;
    width: 3.75rem;
    &:after, &:before {
      content:"";
      @include position;
      border-radius: 50%;
      height: 1.25rem;
      width: 1.25rem;
    }
    &:after   { left: 3.125rem; top: 0.625rem; }
    &:before  { left: 3.75rem; top: 2.813rem; }
  }
  .circle:nth-child(1) { left: -0.75rem; top: 5rem; }
  .circle:nth-child(2) {
    right: 0.625rem;
    top: 0;
    transform: rotate(90deg);
    &:after   { left: 4.063rem; top: 0.625rem; }
    &:before  { display: none; }
  }
}
.caveman:nth-child(1) .shape {
  background-color: $color-red-1;
  .circle {
    background-color: $color-red-2;
    &:after, &:before { background-color: $color-red-2; }
  }
}
.caveman:nth-child(2) .shape {
  background-color: $color-red-2;
  .circle { background-color: $color-red-1;
    &:after, &:before { background-color: $color-red-1; }
  }
}
.arm-right {
  @include position;
  background-color: $color-skin-1;
  border-left: 0.5rem solid rgba($color-black, 0.1);
  border-radius: 3.125rem;
  box-sizing: border-box;
  height: 11.25rem;
  left: 8.438rem;
  top: 5rem;
  transform-origin: 1.875rem 1.875rem;
  width: 3.75rem;
  z-index: 1;
  .club {
    @include position;
    border-bottom: 6.875rem solid $color-wood-1;
    border-left:   0.625rem solid transparent;
    border-right:  0.625rem solid transparent;
    height: 0;
    left: -3.75rem;
    top: 7.5rem;
    transform: rotate(70deg);
    width: 1.25rem;
    &:after, &:before {
      @include position;
      content:"";
      background-color: $color-wood-1;
      border-radius: 50%;
      left: 0;
    }
    &:after   { height: 1.25rem; width: 1.25rem; top: -0.625rem; }
    &:before  { height: 2.5rem; width: 2.5rem; left: -0.625rem; top: 5.625rem; }
  }
}
.leg {
  @include position;
  border-radius: 0.625rem;
  height: 3.438rem;
  top: 12.5rem;
  width: 0.625rem;
  &:after {
    @include position;
    content: "";
    border-radius: 50%;
    height: 0.625rem;
    left: -0.313rem;
    top: 0.938rem;
    width: 0.625rem;
  }
  .foot {
    @include position;
    border-radius: 1.563rem 1.563rem 0 0;
    height: 1.563rem;
    left: -2.375rem;
    top: 1.875rem;
    width: 3.125rem;
    &:after, &:before, .fingers, .fingers:after {
      @include position;
      background-color: $color-skin-1;
      border-radius: 50%;
      bottom: 0;
      height: 0.938rem;
      transform-origin: bottom;
      width: 0.938rem;
    }
    &:after         { left: -0.375rem; content: ""; }
    &:before        { left: 0.8rem; transform: scale(0.6); content: ""; }
    .fingers        { left: 0.938rem; transform: scale(0.6); }
    .fingers:after  { left: 0.688rem; content: ""; }
  }
}
.leg:nth-child(1)   {
  background-color: $color-skin-3;
  left: 5.938rem;
  &:after { background-color: $color-skin-3; }
  .foot   { background-color: $color-skin-3;
    &:after { background-color: $color-skin-3;}
    &:before {display: none;}
  }
}
.leg:nth-child(2)   {
  background-color: $color-skin-2;
  left: 7.188rem;
  &:after { background-color: $color-skin-2; }
  .foot   { background-color: $color-skin-2; }
}

// ---------- animation
.caveman:nth-child(1) .arm-right {
  animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(2) .arm-right {
  animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes arm-anima {
  0%    { transform: rotate(0) }
  100%  { transform: rotate(-360deg) }
}
.caveman:nth-child(2) .head {
  animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(1) .head {
  animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes head-anima {
  0%    { top: 1.563rem; }
  42%   { top: 1.563rem; }
  45%   { top: 3.125rem; }
  100%  { top: 1.563rem; }
}
.caveman:nth-child(2) .eye:after,
.caveman:nth-child(2) .eye:before {
  animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(1) .eye:after,
.caveman:nth-child(1) .eye:before {
  animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes eye-anima {
  0%    { height: 0.313rem; }
  42%   { height: 0.313rem; }
  45%   { height: 0.063rem; }
  100%  { height: 0.313rem; }
}
.container {
  &:after {
    animation: shadow-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.1s;
  }
}
@keyframes shadow-anima {
  0%    { width: 21.875rem; left: 5rem; }
  25%   { width: 28.125rem; left: 5rem; }
  50%   { width: 21.875rem; left: 5rem; }
  75%   { width: 28.125rem; left: 0; }
  100%  { width: 21.875rem; left: 5rem; }
}

</style>