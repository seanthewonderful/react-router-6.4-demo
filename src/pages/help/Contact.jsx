
const Contact = () => {
  return (
    <div className="contact">
        <form>
            <label>
                <span>Your email:</span>
                <input type="email" name="email" required />
            </label>

            <label>
                <span>Your message:</span>
                <textarea name="message" required></textarea>
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact