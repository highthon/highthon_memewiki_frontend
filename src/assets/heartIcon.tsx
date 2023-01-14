interface Props {
  isClicked: boolean;
}

const HeartIcon = ({ isClicked }: Props) => {
  const color = isClicked ? "#F2624E" : "#DEDEDE";
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6718 21.306C11.3378 21.746 12.1968 21.746 12.8618 21.306C14.9768 19.91 19.5818 16.573 21.5658 12.839C24.1808 7.913 21.1098 3 17.0498 3C14.7358 3 13.3438 4.209 12.5738 5.248C12.4813 5.37525 12.3601 5.47882 12.2199 5.55022C12.0797 5.62163 11.9246 5.65885 11.7673 5.65885C11.61 5.65885 11.4549 5.62163 11.3148 5.55022C11.1746 5.47882 11.0533 5.37525 10.9608 5.248C10.1908 4.209 8.79882 3 6.48482 3C2.42482 3 -0.646178 7.913 1.96982 12.839C3.95182 16.573 8.55882 19.91 10.6718 21.306Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
