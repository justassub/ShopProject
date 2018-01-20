package lt.it.akademija;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
    Product findById(Long id);
    Product findAllBy ();
    Product save(Product product);
    List<Product> findProductById(Long id);
    Product findProductObjectById(Long id);

    Product deleteProductById(Long id);


}
