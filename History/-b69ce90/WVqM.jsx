function Photos() {
  return (
    <StyledPhotos>
      {arr.map((img) => (
        <Photo key={img} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
