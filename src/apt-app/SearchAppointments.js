import React from 'react';

class SearchAppointments extends React.Component {

    constructor() {
        super();
        this.handleOrder = this.handleOrder.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.isOrderDir = this.isOrderBy.bind(this);
        this.isOrderBy = this.isOrderBy.bind(this);
    }

    isOrderBy(item) {
        return (this.props.orderBy === item) ? <span className="glyphicon glyphicon-ok"></span> : null
    }

    isOrderDir(item) {
        return (this.props.orderDir === item) ? <span className="glyphicon glyphicon-ok"></span> : null
    }

    handleSort(ev) {
        this.props.onReOrder(ev.target.id, this.props.orderDir)
    }

    handleOrder(ev) {
        this.props.onReOrder(this.props.orderBy, ev.target.id)
    }

    handleSearch(ev) {
        this.props.onSearch(ev.target.value)
    }

    render() {

        var decor ={
            backgroundColor: '#126753',
            borderColor: '#126753'
        };

        return (
            <div className="row search-appointments">
              <div className="col-sm-offset-3 col-sm-6">
                <div className="input-group">
                  <input id="SearchApts" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={decor}>Sort by: <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a href="#" id="petName" onClick={this.handleSort}>Patient Name { this.isOrderBy('petName') } </a></li>
                      <li><a href="#" id="aptDate" onClick={this.handleSort}>Date { this.isOrderBy('aptDate') }</a></li>
                      <li><a href="#" id="ownerName" onClick={this.handleSort}>Phone number { this.isOrderBy('ownerName') }</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#" id="asc" onClick={this.handleOrder}>Asc { this.isOrderDir('asc') }</a></li>
                      <li><a href="#" id="desc" onClick={this.handleOrder}>Desc { this.isOrderDir('desc') }</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default SearchAppointments;