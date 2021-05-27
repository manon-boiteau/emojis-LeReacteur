const Search = ({ keyUp }) => {
  return (
    <header>
      <h1>EmojiSearch 🦥</h1>
      <input
        onKeyUp={keyUp}
        type="search"
        placeholder="What emoji do you want?"
      />
    </header>
  );
};

export default Search;
