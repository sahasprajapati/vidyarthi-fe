import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const SettingSvg: React.FC<Props> = ({
  fill = '#120D26',
  width = 32,
  height = 32,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.3844 11.1C26.8374 11.0206 26.3153 10.8187 25.8571 10.5095C25.3988 10.2003 25.0163 9.79172 24.7378 9.31417C24.4594 8.83662 24.2923 8.30241 24.249 7.75132C24.2056 7.20024 24.2872 6.64647 24.4875 6.13127C24.6149 5.79445 24.6336 5.42622 24.5412 5.0782C24.4487 4.73018 24.2496 4.41983 23.9719 4.19064C22.7457 3.16095 21.3499 2.35206 19.8469 1.80002C19.5046 1.67288 19.131 1.65699 18.7792 1.75463C18.4273 1.85226 18.1153 2.05843 17.8875 2.34377C17.5447 2.78219 17.1065 3.13679 16.6062 3.38066C16.1059 3.62452 15.5566 3.75126 15 3.75126C14.4435 3.75126 13.8942 3.62452 13.3939 3.38066C12.8936 3.13679 12.4554 2.78219 12.1125 2.34377C11.8847 2.05843 11.5727 1.85226 11.2209 1.75463C10.8691 1.65699 10.4954 1.67288 10.1531 1.80002C8.76533 2.30968 7.46776 3.03759 6.3094 3.95627C6.01741 4.18742 5.80709 4.50599 5.70924 4.86532C5.6114 5.22465 5.63116 5.60586 5.76565 5.95314C5.98198 6.48198 6.07136 7.05415 6.02662 7.62377C5.98188 8.19338 5.80426 8.74459 5.50802 9.23316C5.21178 9.72174 4.80515 10.1341 4.32076 10.4371C3.83638 10.7402 3.28771 10.9255 2.71877 10.9781C2.3494 11.0176 2.00247 11.1747 1.72906 11.4262C1.45565 11.6776 1.2702 12.0102 1.20002 12.375C1.02546 13.2391 0.93752 14.1185 0.93752 15C0.936237 15.738 0.995814 16.4749 1.11565 17.2031C1.17528 17.5796 1.35728 17.926 1.6335 18.1886C1.90972 18.4513 2.26478 18.6156 2.64377 18.6563C3.2252 18.7108 3.78511 18.9039 4.27662 19.2192C4.76813 19.5346 5.17695 19.9631 5.46886 20.4689C5.76077 20.9747 5.92728 21.5431 5.95445 22.1264C5.98162 22.7098 5.86866 23.2912 5.62502 23.8219C5.46558 24.1671 5.42603 24.5557 5.51265 24.926C5.59927 25.2963 5.8071 25.627 6.10315 25.8656C7.322 26.8766 8.70431 27.6724 10.1906 28.2188C10.3807 28.2846 10.5801 28.3194 10.7813 28.3219C11.0571 28.3213 11.3287 28.2546 11.5734 28.1273C11.818 28.0001 12.0286 27.8161 12.1875 27.5906C12.5217 27.1038 12.9696 26.7059 13.4924 26.4314C14.0152 26.157 14.5971 26.0142 15.1875 26.0156C15.7596 26.0164 16.3237 26.1507 16.8347 26.4078C17.3458 26.665 17.7898 27.0379 18.1313 27.4969C18.3584 27.8023 18.6802 28.0239 19.0465 28.1273C19.4127 28.2308 19.8029 28.2102 20.1563 28.0688C21.5154 27.5218 22.7806 26.7658 23.9063 25.8281C24.189 25.5944 24.3904 25.2769 24.4813 24.9215C24.5723 24.566 24.5482 24.1909 24.4125 23.85C24.192 23.328 24.0959 22.7619 24.1317 22.1963C24.1675 21.6308 24.3343 21.0813 24.6188 20.5913C24.9034 20.1012 25.298 19.684 25.7714 19.3726C26.2449 19.0612 26.7842 18.8641 27.3469 18.7969C27.7118 18.7464 28.0511 18.5811 28.3157 18.3249C28.5804 18.0687 28.7565 17.7349 28.8188 17.3719C28.9693 16.5899 29.0509 15.7963 29.0625 15C29.0627 14.1602 28.9842 13.3221 28.8281 12.4969C28.7649 12.1419 28.5913 11.8158 28.3321 11.565C28.0729 11.3143 27.7413 11.1516 27.3844 11.1ZM19.6875 15C19.6875 15.9271 19.4126 16.8334 18.8975 17.6043C18.3825 18.3751 17.6504 18.9759 16.7939 19.3307C15.9373 19.6855 14.9948 19.7783 14.0855 19.5975C13.1763 19.4166 12.341 18.9701 11.6855 18.3146C11.0299 17.659 10.5835 16.8238 10.4026 15.9145C10.2217 15.0052 10.3146 14.0627 10.6693 13.2062C11.0241 12.3497 11.6249 11.6176 12.3958 11.1025C13.1666 10.5874 14.0729 10.3125 15 10.3125C16.2432 10.3125 17.4355 10.8064 18.3146 11.6855C19.1937 12.5645 19.6875 13.7568 19.6875 15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingSvg;