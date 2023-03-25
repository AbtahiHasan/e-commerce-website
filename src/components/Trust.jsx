const stats = [
    { id: 1, name: 'Our Customers', value: '1M' },
    { id: 2, name: 'Assets under holding', value: '$5M' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  export default function Trust() {
    return (
      <div className="bg-white py-24 sm:py-32 max-w-[1200px] mx-auto">
        <hr />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <hr />
      </div>
    )
  }
  