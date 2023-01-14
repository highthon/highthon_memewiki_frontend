interface Props {
  isActive: boolean;
  onClick: () => void;
}

const SearchIcon = ({ isActive, onClick }: Props) => {
  const color = isActive ? "#08DC9C" : "#DEDEDE";
  return (
    <svg
      onClick={onClick}
      width="29"
      height="29"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5402 26.9887L22.7394 20.1879C24.3767 18.0081 25.2606 15.355 25.2576 12.6288C25.2576 5.66532 19.5923 0 12.6288 0C5.66532 0 0 5.66532 0 12.6288C0 19.5923 5.66532 25.2576 12.6288 25.2576C15.355 25.2606 18.0081 24.3767 20.1879 22.7394L26.9887 29.5402C27.333 29.8479 27.782 30.0122 28.2435 29.9993C28.7051 29.9864 29.1442 29.7972 29.4707 29.4707C29.7972 29.1442 29.9864 28.7051 29.9993 28.2435C30.0122 27.782 29.8479 27.333 29.5402 26.9887ZM3.60823 12.6288C3.60823 10.8447 4.13728 9.10066 5.12847 7.61724C6.11966 6.13381 7.52848 4.97762 9.17678 4.29488C10.8251 3.61213 12.6388 3.4335 14.3886 3.78156C16.1384 4.12962 17.7458 4.98874 19.0073 6.25029C20.2689 7.51184 21.128 9.11915 21.476 10.869C21.8241 12.6188 21.6455 14.4325 20.9627 16.0808C20.28 17.7291 19.1238 19.1379 17.6404 20.1291C16.1569 21.1203 14.4129 21.6494 12.6288 21.6494C10.2373 21.6465 7.94453 20.6952 6.25346 19.0041C4.5624 17.3131 3.6111 15.0203 3.60823 12.6288Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
