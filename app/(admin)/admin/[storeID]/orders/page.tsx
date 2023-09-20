import OrderListing from "./_components/OrderListing"

export default function OrdersPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderListing data={0} />
      </div>
    </div>
  )
}
