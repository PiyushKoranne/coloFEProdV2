const ResponseBlock = ({ response }) => {
  return (
    <>
      <pre>
        <code className="language-json">{response}</code>
      </pre>
    </>
  );
};

export default ResponseBlock;