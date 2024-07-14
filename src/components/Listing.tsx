import { Mass } from "../module/modalBox";

export default function Listing({ items }: Mass) {
  return (
    <div className="item-list">
      {items.map((item, idx) => {
        // цвет блока с количеством
        let quantityColor: string = "";
        item.quantity <= 10
          ? (quantityColor = "level-low")
          : item.quantity > 20
          ? (quantityColor = "level-high")
          : (quantityColor = "level-medium");

        // обрезка текста
        let newTitle = "";
        const title: string = item.title;
        title.length > 50
          ? (newTitle = title.substring(0, 50) + "...")
          : (newTitle = title);

        // валютный знак
        let valluta = "";
        item.currency_code == "USD"
          ? (valluta = `$ ${item.price}`)
          : item.currency_code === "EUR"
          ? (valluta = `€ ${item.price}`)
          : (valluta = `${item.price}${item.currency_code}`);

        return (
          <div className="item" key={idx}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{newTitle}</p>
              <p className="item-price">{valluta}</p>
              <p className={"item-quantity " + quantityColor}>
                {item.quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
